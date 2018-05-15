from rest_framework.generics import ListCreateAPIView
from rest_framework.parsers import JSONParser, MultiPartParser
from rest_framework.permissions import IsAuthenticated

from .models import UploadedFile
from .serializers import UploadedFileSerializer


class UploadedFileListCreateAPIView(ListCreateAPIView):
    """
    get: List all uploaded files
    post: Create new uploaded file
    """

    queryset = UploadedFile.objects.all()
    serializer_class = UploadedFileSerializer
    parser_classes = (JSONParser, MultiPartParser)
