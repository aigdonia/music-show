<template>
  <section class='songs-list'>
    <div class='song' v-for="(song, id) in songs" :key="id">
      <el-image
        style="width: 100px; height: 100px"
        :src="albumPicture(song)"
        fit="cover">
      </el-image>
      <div class="song__details">
        <div class="flex space-between center-line">
          <span class="song__title">{{song.Song}}</span>
          <i class="el-icon-star-off"></i>
        </div>
        <span class='song__tag'>{{song.Genre}}</span>
        <div>
          <span class='light'>{{song.ArtistDetails.Artist}}</span>
          <span class='bold small green'> ({{song.ArtistDetails.Country.Name}})</span>
        </div>
        <div class='flex center-line space-between'>
          <span class='small bold'>{{song.Year}}</span>
          <span class='small bold grow'>{{song.Instrument}}</span>
          <span class='bold uppercase'>{{song.LanguageDetails.ISO}}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'song-list',
  props: ['songs'],
  methods: {
    albumPicture (song) {
      if (!song.Picture) {
        return '../assets/cover.png'
      } else return song.Picture[0].thumbnails.large.url
    }
  }
}
</script>

<style lang="scss">
  .song {
    margin: 2px 0;
    padding: 5px;
    display: flex;
    border-bottom: 1px solid #dadada;
    &:last-of-type {
      border-bottom: none;
    }

    &__details {
      padding: 5px 0px 5px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
    }

    &__title {
      display: block;
      font-size: 1.3rem;
      font-weight: bold;
    }

    &__tag {
      display: block;
      font-size: 10px;
      font-weight: bold;

    }
  }
</style>
