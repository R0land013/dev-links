import type { DocumentationLink } from "./";


const postgresqlDescription =
`
PostgreSQL, a powerful, open source object-relational database systemm that 
extends the SQL language.
`;

const postgresql: DocumentationLink = {
    name: 'PostgreSQL',
    category: 'Documentation',
    linkUrl: 'https://www.postgresql.org/docs/',
    description: postgresqlDescription,
};

export default postgresql;