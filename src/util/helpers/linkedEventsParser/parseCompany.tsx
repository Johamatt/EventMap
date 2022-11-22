import { API, graphqlOperation } from "aws-amplify";
import { Company, CreateCompanyInput } from "../../../API";
import { createCompany } from "../../../graphql/mutations";

export function parseCompany(data: any) {
  let company: CreateCompanyInput = {
    businessId: data.businessId,
    email: data.email,
    name: data.name,
    phone: data.phone,
  };
  console.log(company);
  create(company);

  // return company;

  return data.businessId;
}

async function create(company: CreateCompanyInput) {
  await API.graphql(graphqlOperation(createCompany, { input: company }));
}
