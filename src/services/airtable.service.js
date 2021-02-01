import Airtable from 'airtable'

const base = new Airtable({
  apiKey: 'keyhiTrWPFL5IAsr1'
}).base('appum27cOaFpMnkfL')

async function _getTable (tableName) {
  const records = (await base(tableName).select({
    view: 'Grid view'
  }).all()).reduce((rs, { id, fields }) => {
    rs[id] = fields
    return rs
  }, {})

  return records
}

export async function getArtists () {
  const [artists, countries] = await Promise.all([
    _getTable('Artists'),
    getCountries()
  ])

  const normalized = {}
  for (const i in artists) {
    const artist = Object.assign(artists[i], {})
    artist.Country = Object.assign(countries[artist.Country[0]], {})
    normalized[i] = artist
  }

  return normalized
}

export async function getSongs () {
  const [songs, artists, languages] = await Promise.all([
    _getTable('Songs'),
    getArtists(),
    getLanguages()
  ])

  // Normalization
  const normalized = {}
  for (const i in songs) {
    const song = Object.assign(songs[i], {})
    song.ArtistDetails = Object.assign(artists[song.Artist[0]], {})
    song.LanguageDetails = Object.assign(languages[song.Language[0]], {})
    normalized[i] = song
  }

  return normalized
}

export async function getCountries () {
  return await _getTable('Country')
}

export async function getLanguages () {
  return await _getTable('Language')
}

export async function getFAQs () {
  return await _getTable('FAQ')
}
