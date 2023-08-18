import type { PaaSLink } from ".";


const DenoDeployDescription =
`
Serverless JavaScript hosting with zero config, worldwide.
`;

const DenoDeploy: PaaSLink = {
    name: 'Deno Deploy',
    category: 'PaaS',
    linkUrl: 'https://deno.com/deploy',
    description: DenoDeployDescription,
};

export default DenoDeploy;