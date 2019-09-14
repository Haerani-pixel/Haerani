function getProfile() {
  return {
    name: 'Haerani',
    age: '22',
    address: 'Jl. Pangkalan Baru RT. 03, Desa Sungai Pancang Kecamatan Sebatik Utara Kabupaten Nunukan Provinsi Kalimantan Utara',
    hobbies: ['Reading', 'Music'] //Array
    is_married: false //Boolean,
    school: {
      highschool: 'SMAN 1 Sebatik Tengah',
      year_in: '2011',
      year_out: '2014',
      major: 'IPA',
    skills: [{
      name: 'Office',
      level: 'advanced',
    interest_in_coding: true //Boolean
  }
}








let profile = getProfile();

let skills = profile.skills;

// megakses sekolah
let highschool = profile.school.highscool;
//atau pakai es6

let {skills} = profile;

// print json yang telah di convert ke type String
console.log(JSON.stringify(skills));
