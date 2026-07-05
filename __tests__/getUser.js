import * as endpoint from '../endpoint/getUser';
import * as schema from '../schema/getListUser';
import respStatus from '../base/responseStatus';
import * as er from '../base/expectResp';
import {jest} from '@jest/globals';

describe('Get List User -- Positive Case', () => {
  test('I can get list user and its detail by page number 2', async () => {
    const response = await endpoint.getListUsers(2);
    console.log(response.status, response.body, respStatus.statusSuccessful)
    expect(respStatus).toEqual(respStatus.statusSuccessful);
    er.expectStatus(response.status, respStatus.statusSuccessful);
    er.expectSchema(response, schema.listUsers);
    er.expectSnapshot(response);
  });
});

describe('Get User -- Positive Case', () => {
  test.skip('I can get detail user by ID 2', async () => {
    const response = await endpoint.getUser(2);
    console.log(response);
    er.expectStatus(response, respStatus.statusSuccessful);
    er.expectSchema(response, schema.singleUser);
    er.expectSnapshot(response);
  });
});