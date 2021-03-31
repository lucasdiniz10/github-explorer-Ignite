export function RepositoryItem(props) {
  return (
    <li>
      {/* Caso a propriedade esteja vazia, recebe um valor padrão, nesse caso: 'Default' */}
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>
        Acessar repositório
      </a>
    </li>
  );
}