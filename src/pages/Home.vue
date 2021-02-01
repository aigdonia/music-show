<template>
  <div class="home">
    <div class="search-box">
      <!-- Search Box -->
      <span class='header uppercase center large bold'>Search Language</span>
      <el-select
        class='center-block'
        v-model="filterLanguage"
        filterable
        placeholder="Enter Language"
        @change="filterSongsByLanguage">
        <el-option
          v-for="(l, id) in languages"
          :key="id"
          :label="l.Name"
          :value="id">
        </el-option>
      </el-select>
    </div>

    <span class='music-style center uppercase header'>Popular</span>

    <span class='current-language center header bold uppercase over-padder'>
      Language: {{language}}
    </span>
    <!-- End: Search Box -->

    <song-list :songs=filterdSongs></song-list>
  </div>
</template>

<script>
// @ is an alias to /src
import { getLanguages, getSongs } from '../services/airtable.service'
import _ from 'lodash'

import SongList from '../components/SongList'

export default {
  name: 'Home',
  components: {
    SongList
  },
  data () {
    return {
      filterLanguage: '',
      filterdSongs: {},
      languages: {},
      songs: []
    }
  },
  computed: {
    language () {
      return this.languages[this.filterLanguage].Name
    }
  },
  // initial method
  async mounted () {
    this.languages = await getLanguages()
    this.songs = await getSongs()
    Object.freeze(this.songs)

    this.filterLanguage = Object.keys(this.languages)[0] || false // ! in order not to break the app.
    this.filterSongsByLanguage(this.filterLanguage)
  },
  methods: {
    filterSongsByLanguage (language) {
      const filterdSongs = {}

      if (this.filterLanguage) {
        const { Songs: songs } = this.languages[language]

        for (const i of songs) {
          filterdSongs[i] = this.songs[i]
        }
      }
      this.filterdSongs = _.orderBy(filterdSongs, 'Order')
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/_variables.scss';

  .search-box {

    .header {
      font-size: $search-language-title-size;
      color: $search-language-title-color;
    }

    .el-select {
      margin-top: 15px;
      display: block;
      width: 90vw;
    }
  }

  .music-style {
    color: black;
    opacity: 0.2;
    font-weight: normal;
    margin: 1rem 0 1.7rem;
  }

  .current-language {
    background-color: #92d14f;
    color: white;
    padding: 0.3rem 0 0.5rem;
  }
</style>
