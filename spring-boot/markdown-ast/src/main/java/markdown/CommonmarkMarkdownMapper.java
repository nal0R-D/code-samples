@Component
public class CommonmarkMarkdownMapper implements MarkdownMapper {

  private final Parser parser;
  private final MarkdownRenderer renderer;
  private final NodeMappingFactory mappingFactory;

  public CommonmarkMarkdownMapper(
      Parser parser,
      MarkdownRenderer renderer,
      NodeMappingFactory mappingFactory
  ) {
    this.parser = parser;
    this.renderer = renderer;
    this.mappingFactory = mappingFactory;
  }

  /**
   * Converts a markdown string into a custom AST representation.
   *
   * The CommonMark AST is intentionally not exposed outside this class.
   */
  @Override
  public Document toAst(String markdown) {
    if (markdown == null) {
      return new Document(List.of());
    }

    var commonmarkNode = parser.parse(markdown);
    return (Document) mappingFactory.mapNode(commonmarkNode);
  }

  /**
   * Converts the custom AST back into a markdown string.
   */
  @Override
  public String toMarkdown(Document ast) {
    if (ast == null) {
      return "";
    }

    var commonmarkNode = mappingFactory.mapNode(ast);
    return renderer.render(commonmarkNode);
  }
}
