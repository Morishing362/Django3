from django.db import models
from django.core import validators



class Item(models.Model):

    SEX_CHOICES = (
        (1, '男性'),
        (2, '女性'),
    )

    name = models.CharField(
        verbose_name='名前',
        max_length=200,
    )
    age = models.IntegerField(
        verbose_name='年齢',
        validators=[validators.MinValueValidator(1)],
        blank=True
    )
    sex = models.IntegerField(
        verbose_name='性別',
        choices=SEX_CHOICES,
        default=1
    )
    memo = models.TextField(
        verbose_name='備考',
        max_length=300,
        blank=True
    )
    created_at = models.DateTimeField(
        verbose_name='登録日',
        auto_now_add=True
    )

    # 以下は管理サイト上の表示設定
    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'アイテム'
        verbose_name_plural = 'アイテム'

class Words(models.Model):

    number = models.IntegerField(
        verbose_name='番号'
    )

    en_word = models.CharField(
        verbose_name='英単語',
        max_length=200,
    )

    jp_word = models.CharField(
        verbose_name='日本語訳',
        max_length=200,
    )

    def __str__(self):
        return self.en_word

    class Meta:
        verbose_name = '単語'
        verbose_name_plural = '単語'



    


