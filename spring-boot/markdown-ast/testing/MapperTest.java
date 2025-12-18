@DisplayName("CommonmarkMarkdownMapper")
class CommonmarkMarkdownMapperTest {

  private CommonmarkMarkdownMapper mapper;

  @BeforeEach
  void setUp() {
    mapper =
        new CommonmarkMarkdownMapper(
            Parser.builder().build(),
            MarkdownRenderer.builder().build(),
            new NodeMappingFactory(
                List.of(
                    new DocumentStrategy(),
                    new HeadingStrategy(),
                    new ParagraphStrategy(),
                    new BulletListStrategy(),
                    new ListItemStrategy(),
                    new StrongEmphasisStrategy(),
                    new TextStrategy())));
  }

  @ParameterizedTest
  @NullAndEmptySource
  void nullOrEmptyMarkdown_resultsInEmptyDocument(String markdown) {
    Document document = mapper.toAst(markdown);

    assertThat(document).isNotNull();
    assertThat(document.children()).isEmpty();
  }

  @Test
  void parsesHeadingAndParagraphIntoAst() {
    Document document =
        mapper.toAst(
            """
            # Title

            Some text.
            """);

    assertThat(document.children()).hasSize(2);
    assertThat(document.children().get(0)).isInstanceOf(Heading.class);
    assertThat(document.children().get(1)).isInstanceOf(Paragraph.class);
  }

  @Test
  void roundtripMarkdown_preservesStructure() {
    String markdown =
        """
        Some **bold** text.

        - first
        - second
        """;

    Document ast = mapper.toAst(markdown);
    String result = mapper.toMarkdown(ast);

    assertThat(result).contains("**bold**");
    assertThat(result).contains("- first");
  }

  @Test
  void roundtripCustomAst_preservesStructure() {
    Document doc =
        MarkdownBuilder.document()
            .addHeading(1, "Title")
            .addParagraph(in -> in.text("Some ").strong("bold").text(" text."))
            .build();

    String markdown = mapper.toMarkdown(doc);
    Document parsed = mapper.toAst(markdown);

    assertThat(parsed.children()).hasSize(2);
  }
}
