"""
Uploaded files app serializers
"""

from rest_framework import serializers
from .models import UploadedFile


class UploadedFileSerializer(serializers.ModelSerializer):
    """
    Serializer for uploaded image file
    """

    class Meta:
        model = UploadedFile
        fields = '__all__'
        read_only_fields = ('id',)
