/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    //your code here
    let heroes = str.split(',')
    let group = [[],[]];

    if(str.length == 0){
      return []
    }

    for (let i = 0; i < heroes.length; i++) {
      for (let j = 0; j < heroes[i].length; j++) {
        if (heroes[i][j] == '-' && heroes[i][j+1] == 'R') {
          group[0].push(heroes[i].slice(0,j))
        }
        else if(heroes[i][j] == '-' && heroes[i][j+1] == 'M'){
          group[1].push(heroes[i].slice(0,j))
        }
      }
    }
    return group;

  }
  

  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []