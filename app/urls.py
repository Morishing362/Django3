from django.urls import path
from .views import ItemFilterView, ItemDetailView, ItemCreateView, ItemUpdateView, ItemDeleteView
from .views import SampleTemplateView, WordsAllView


urlpatterns = [
    # 一覧画面
    path('',  ItemFilterView.as_view(), name='index'),
    # 詳細画面
    path('detail/<int:pk>/', ItemDetailView.as_view(), name='detail'),
    # 登録画面
    path('create/', ItemCreateView.as_view(), name='create'),
    # 更新画面
    path('update/<int:pk>/', ItemUpdateView.as_view(), name='update'),
    # 削除画面
    path('delete/<int:pk>/', ItemDeleteView.as_view(), name='delete'),
    # 勉強用テスト画面
    path('sample/', SampleTemplateView.as_view(), name='sample'),
    # 英単語一覧画面
    path('words/', WordsAllView.as_view(), name='words'),
]