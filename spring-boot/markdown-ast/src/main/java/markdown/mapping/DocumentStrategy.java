@Component
public class DocumentStrategy implements MappingStrategy {

  @Override
  public MarkdownNode map(Node node, NodeMappingFactory factory) {
    List<MarkdownNode> children = new ArrayList<>();

    for (Node child = node.getFirstChild(); child != null; child = child.getNext()) {
      children.add(factory.mapNode(child));
    }

    return new Document(children);
  }

  @Override
  public Node map(MarkdownNode node, NodeMappingFactory factory) {
    Document document = (Document) node;
    var result = new org.commonmark.node.Document();

    for (MarkdownNode child : document.children()) {
      result.appendChild(factory.mapNode(child));
    }

    return result;
  }

  @Override
  public boolean canMap(Node node) {
    return node instanceof org.commonmark.node.Document;
  }

  @Override
  public boolean canMap(MarkdownNode node) {
    return node instanceof Document;
  }
}
