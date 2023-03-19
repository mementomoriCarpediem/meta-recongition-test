import AWS, { ConfigurationOptions } from 'aws-sdk';

const configuration: ConfigurationOptions = {
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
};

AWS.config.update(configuration);

const docClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'meta_recognition';

type TDataType = {
  nickname: string;
  date: string;
  wordsTotal: number;
  guessNumber: number;
  correctNumber: number;
};

export class AWSDynamoDB {
  fetchData() {
    var params = {
      TableName: TABLE_NAME,
    };

    docClient.scan(params, function (err, data) {
      if (!err) {
        console.log(data);
      }
    });
  }

  putData = (data: TDataType) => {
    var params = {
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
