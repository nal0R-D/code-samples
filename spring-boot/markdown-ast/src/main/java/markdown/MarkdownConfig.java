@Configuration
class MarkdownConfig {

  /**
   * CommonMark parser used only inside the markdown mapping layer.
   */
  @Bean
  Parser commonmarkParser() {
    return Parser.builder().build();
  }

  /**
   * Renderer used to convert CommonMark AST back to markdown.
   */
  @Bean
  MarkdownRenderer commonmarkRenderer() {
    return MarkdownRenderer.builder().build();
  }
}
