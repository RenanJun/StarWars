
export function getActorImage(name) {

    switch(name){
        case 'Anakin Skywalker':
        return require('../images/anakin_skywalker.jpeg');
        case 'Beru Whitesun lars':
        return require('../images/beruwhitesuniars.jpg');
        case 'Biggs Darklighter':
        return require('../images/biggs.jpeg');
        case 'C-3PO':
        return require('../images/c-3po.jpeg');
        case 'Chewbacca':
        return require('../images/chewbacca.jpeg');
        case 'Darth Vader':
        return require('../images/darth_vader.jpg');
        case 'Greedo':
        return require('../images/greedo.jpeg');
        case 'Han Solo':
        return require('../images/hansolo.jpeg');
        case 'Jabba Desilijic Tiure':
        return require('../images/jabba.jpeg');
        case 'Jek Tono Porkins':
        return require('../images/jektonoparkins.png');
        case 'Leia Organa':
        return require('../images/leia.jpeg');
        case 'Luke Skywalker':
        return require('../images/lukeskywalker.jpeg');
        case 'Owen Lars':
        return require('../images/owenlars.jpeg');
        case 'Palpatine':
        return require('../images/palpatine.jpg');
        case 'R2-D2':
        return require('../images/r2-d2.jpg');
        case 'R5-D4':
        return require('../images/r5-d4.jpg');
        case 'Wedge Antilles':
        return require('../images/wedgeantilles.jpg');
        case 'Wilhuff Tarkin':
        return require('../images/wilhufftarkin.jpg');
        case 'Yoda':
        return require('../images/yoda.jpg');
        case 'Obi-Wan Kenobi': 
        return require('../images/obin.png')

    }
}

export function getMovieImage(title) {

    switch(title){
        case 'A New Hope':
        return require('../images/anew.png');
        case 'Attack of the Clones':
        return require('../images/atack.jpeg');
        case 'The Phantom Menace':
        return require('../images/thephantom.jpeg');
        case 'Revenge of the Sith':
        return require('../images/revenge.jpeg');
        case 'Return of the Jedi':
        return require('../images/return.jpeg')
        case 'The Empire Strikes Back':
        return require('../images/theempire.jpeg');
        case 'The Force Awakens':
        return require('../images/theforce.jpeg')
        
    }
}