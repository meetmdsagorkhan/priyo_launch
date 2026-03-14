import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const requiredKeys = [
  "S3_REGION",
  "S3_ENDPOINT",
  "S3_BUCKET",
  "S3_ACCESS_KEY_ID",
  "S3_SECRET_ACCESS_KEY",
] as const;

function hasS3Config() {
  return requiredKeys.every((key) => Boolean(process.env[key]));
}

export function isS3Configured() {
  return hasS3Config();
}

function getClient() {
  if (!hasS3Config()) {
    throw new Error("S3 storage is not configured.");
  }

  return new S3Client({
    region: process.env.S3_REGION!,
    endpoint: process.env.S3_ENDPOINT!,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID!,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    },
    forcePathStyle: true,
  });
}

export async function createDocumentUploadUrl(params: {
  bucket: string;
  key: string;
  contentType: string;
}) {
  const client = getClient();
  const command = new PutObjectCommand({
    Bucket: params.bucket,
    Key: params.key,
    ContentType: params.contentType,
  });

  return getSignedUrl(client, command, { expiresIn: 600 });
}

