// import { loppingSnapExByResponse } from './base-function';
import * as chai from 'chai';
import chaiSorted from 'chai-sorted';

const expectChai = chai.expect;
chai.use(chaiSorted);

export { expectChai };


export const output = (response) => ({
  text: `\n  Request: ${JSON.stringify(response.request, null, 4)}`,
});

export const expectStatus = (response, expectedStatus) => {
  expect((response).status, `Reason: Wrong HTTP Status Code ${output(response).text}`).toEqual(expectedStatus);
};

export const expectEqual = (response, actualData, expectedBody) => {
  expect(actualData, `Reason: Actual Data is not equal with Expected Data ${output(response).text}`).toEqual(expectedBody);
};

export const expectContain = (response, actualData, expectedBody) => {
  expect(actualData, `Reason: Actual Data is not contain with Expected Data ${output(response).text}`).toContain(expectedBody);
};

export const expectSchema = (response, expectedSchema) => {
  expect((response).body, `Reason: Wrong Response Schema ${output(response).text}`).toMatchSchema(expectedSchema);
};

export const expectSnapshot = (response) => {
  expect((response).body, `Reason: Response Should be the same with Snapshot ${output(response).text}`).toMatchSnapshot();
};

export const expectSnapshot1 = (response) => {
  expect((response).body, `Reason: Response Should be the same with Snapshot ${output(response)}`).toMatchSnapshot();
};

export const expectSnapEx = (response, snapshotExcept) => {
  expect((response).body, `Reason: Response Should be the same with Snapshot ${output(response).text}`).toMatchSnapshot(snapshotExcept);
};

// export const expectSnapExArray = async (response, snapshotExcept, pathToArray) => {
//   let tempExpected = snapshotExcept;
//   tempExpected = await loppingSnapExByResponse(response, tempExpected, pathToArray);

//   expect((response).body, `Reason: Response Should be the same with Snapshot ${output(response).text}`).toMatchSnapshot(tempExpected);
// };

export const expectSnapshotSpec = (response, actualData) => {
  expect(actualData, `Reason: Response Should be the same with Snapshot ${output(response).text}`).toMatchSnapshot();
};

export const expectSnapExSpec = (response, actualData, snapshotExcept) => {
  expect(actualData, `Reason: Response Should be the same with Snapshot ${output(response).text}`).toMatchSnapshot(snapshotExcept);
};

export const expectAscending = (response, actualData) => {
  expectChai(actualData, `Reason: Response must be sorted Ascending ${output(response).text}`).to.be.sorted({ descending: false });
};

export const expectDescending = (response, actualData) => {
  expectChai(actualData, `Reason: Response mush be sorted Descending ${output(response).text}`).to.be.sorted({ descending: true });
};

export const expectLength = (response, actualData, length) => {
  expectChai(actualData, `Reason: Actual Length is not Equal with Expected Length ${output(response).text}`).to.have.lengthOf(length);
};

export const expectLengthWithin = (response, actualData, minLength, maxLength) => {
  expectChai(actualData, `Reason: Actual Length is not Equal between Expected Length ${output(response).text}`).to.have.lengthOf.within(minLength, maxLength);
};

export const expectWithin = (response, actualData, min, max) => {
  expectChai(actualData, `Reason: Actual Number is not Equal between Expected Number ${output(response).text}`).to.be.within(min, max);
};

export const expectGreaterThanOrEqual = (response, actualData, number) => {
  expect(actualData, `Reason: Actual Number is not Greater than or Equal with Expected Number ${output(response).text}`).toBeGreaterThanOrEqual(number);
};

export const expectLessThanOrEqual = (response, actualData, number) => {
  expect(actualData, `Reason: Actual Number is not Less than or Equal with Expected Number ${output(response).text}`).toBeLessThanOrEqual(number);
};

export const expectGreaterThan = (response, actualData, number) => {
  expect(actualData, `Reason: Actual Number is not Greater than with Expected Number ${output(response).text}`).toBeGreaterThan(number);
};

export const expectLessThan = (response, actualData, number) => {
  expect(actualData, `Reason: Actual Number is not Less than with Expected Number ${output(response).text}`).toBeLessThan(number);
};

export const expectNotEqual = (response, actualData, expectedBody) => {
  expect(actualData, `Reason: Actual Data should not equal with Expected Data ${output(response).text}`).not.toEqual(expectedBody);
};

export const expectNotContain = (response, actualData, expectedBody) => {
  expect(actualData, `Reason: Actual Data is not contain with Expected Data ${output(response).text}`).not.toContain(expectedBody);
};
