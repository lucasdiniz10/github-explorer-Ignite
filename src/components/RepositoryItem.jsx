export function RepositoryItem(props) {
  return (
    <li>
      {/* Caso a propriedade esteja vazia, recebe um valor padrão, nesse caso: 'Default' */}
      <strong>{props.repository.name ?? 'Default'}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.link}>
        Acessar repositório
      </a>
    </li>
  );
}