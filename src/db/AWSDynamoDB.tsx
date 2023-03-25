import AWS, { ConfigurationOptions } from 'aws-sdk';

const configuration: ConfigurationOptions = {
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
};

AWS.config.update(configuration);

const docClient = new AWS.DynamoDB.DocumentClient();

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

  putData = (data: TDataType) => {
    const params = {
      TableName: TABLE_NAME,
      Item: data,
    };

    docClient.put(params, function (err, data) {
      if (err) {
        console.log('Error', err);
      } else {
        console.log('Success', data);
      }
    });
  };
}
