from storages.backends.s3boto3 import S3Boto3Storage
from filebrowser_safe.storage import S3BotoStorageMixin
from django.conf import settings


class StaticStorage(S3Boto3Storage):
    location = "static"
    default_acl = "public-read"


class PublicMediaStorage(S3Boto3Storage, S3BotoStorageMixin):
    location = "media"
    default_acl = "public-read"
    file_overwrite = False


class PrivateMediaStorage(S3Boto3Storage):
    location = "private"
    default_acl = "private"
    file_overwrite = False
    custom_domain = False
