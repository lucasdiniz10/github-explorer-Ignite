export function RepositoryItem(props) {
  return (
    <li>
      {/* Caso a propriedade esteja vazia, recebe 'Default' */}
      <strong>{props.repository ?? 'Default'}</strong>
      <p>Forms in React</p>

      <a href="#">
        Acessar repositório
      </a>
    </li>
  );
}