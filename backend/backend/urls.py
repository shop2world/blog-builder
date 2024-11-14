from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from blog.views import PostViewSet
from django.views.generic import RedirectView

router = DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', RedirectView.as_view(url='/api/', permanent=False)),
]

from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 