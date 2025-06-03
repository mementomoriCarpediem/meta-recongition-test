import AWS from 'aws-sdk';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';

async function getDynamoDBClient() {
  const { credentials } = await fetchAuthSession();

  AWS.config.update({
    region: 'ap-northeast-2',
    credentials,
  });
  return new AWS.DynamoDB.DocumentClient();
}

const TABLE_NAME = 'meta_recognition';

export type TDataType = {
  nickname: string;
  date: string;
  wordsTotal: number;
  guessNumber: number;
  correctNumber: number;
};

export class AWSDynamoDB {
  async fetchAllDatas() {
    const docClient = await getDynamoDBClient();
    var params = { TableName: TABLE_NAME };

    return docClient
      .scan(params)
      .promise()
      .then((data) => {
        console.log(data);
        return data.Items;
      })
      .catch((err) => {
        console.error('Unable to read item. Error JSON:', JSON.stringify(err, null, 2));
      });
  }

  async getMyDatas(nickname: string) {
    const docClient = await getDynamoDBClient();
    return docClient
      .query({
        TableName: TABLE_NAME,
        KeyConditionExpression: 'nickname = :nickname',
        ExpressionAttributeValues: { ':nickname': nickname },
      })
      .promise()
      .then((data) => {
        console.log(data);
        return data.Items;
      })
      .catch((err) => {
        console.error('Unable to read item. Error JSON:', JSON.stringify(err, null, 2));
      });
  }

  async putData(data: TDataType) {
    const docClient = await getDynamoDBClient();
    const params = {
      TableName: TABLE_NAME,
      Item: data,
    };

    docClient.put(params, function(err, data) {
      if (err) {
        console.log('Error', err);
      } else {
        console.log('Success', data);
      }
    });
  }
}
