@Component
public class NodeMappingFactory {

  private final List<MappingStrategy> strategies;

  public NodeMappingFactory(List<MappingStrategy> strategies) {
    this.strategies = strategies;
  }

  /**
   * Maps a custom AST node to a CommonMark node.
   */
  public Node mapNode(MarkdownNode node) {
    return strategies.stream()
        .filter(strategy -> strategy.canMap(node))
        .map(strategy -> strategy.map(node, this))
        .findFirst()
        .orElseThrow(() ->
            new IllegalArgumentException("No mapping strategy for node: " + node.getClass()));
  }

  /**
   * Maps a CommonMark node to a custom AST node.
   */
  public MarkdownNode mapNode(Node node) {
    return strategies.stream()
        .filter(strategy -> strategy.canMap(node))
        .map(strategy -> strategy.map(node, this))
        .findFirst()
        .orElseThrow(() ->
            new IllegalArgumentException("No mapping strategy for node: " + node.getClass()));
  }
}
