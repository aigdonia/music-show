<template>
  <el-main>
    <h2 class='center'>Frequently Asked Questions</h2>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item v-for="(quest, id) of questions" :key=id :title="quest.Question" :name="id">
        <div><vue-simple-markdown :source="quest.Answer"></vue-simple-markdown></div>
      </el-collapse-item>
    </el-collapse>
  </el-main>
</template>

<script>
import { getFAQs } from '../services/airtable.service'

export default {
  name: 'FAQ-page',
  data () {
    return {
      questions: []
    }
  },
  async mounted () {
    this.questions = await getFAQs()
  }
}
</script>

<style>

</style>
