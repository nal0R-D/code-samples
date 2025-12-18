@Component
public class TextStrategy implements MappingStrategy {

  @Override
  public MarkdownNode map(Node node, NodeMappingFactory factory) {
    return new Text(((org.commonmark.node.Text) node).getLiteral());
  }

  @Override
  public Node map(MarkdownNode node, NodeMappingFactory factory) {
    return new org.commonmark.node.Text(((Text) node).text());
  }

  @Override
  public boolean canMap(Node node) {
    return node instanceof org.commonmark.node.Text;
  }

  @Override
  public boolean canMap(MarkdownNode node) {
    return node instanceof Text;
  }
}
