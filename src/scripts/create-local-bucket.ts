import { BucketCannedACL, CreateBucketCommand, S3Client } from '@aws-sdk/client-s3';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config({ path: 'environments/local.env' });

const client = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_S3_REGION,
  endpoint: process.env.AWS_S3_ENDPOINT,
  forcePathStyle: true,
});

async function foo() {
  try {
    await client.send(
      new CreateBucketCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        ACL: process.env.AWS_S3_OBJECT_ACL as BucketCannedACL,
      }),
    );
    Logger.log('Bucket is created');
  } catch (e) {
    Logger.log(e);
  }
}

void foo();
