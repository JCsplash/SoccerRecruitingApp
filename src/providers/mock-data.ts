import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MockData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MockData {
  reachSchools: any[];
  targetSchools: any[];
  safetySchools: any[];
  searchResults: any[];
  conversations: any[];
  constructor() {
    this.reachSchools = [{
      isAdded: true,
      name: 'Stanford University',
      img: 'https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/082013/stanford_cardinal_logo.png?itok=v1XxoNfC',
      avg_gpa: '3.9',
      avg_sat: '2250',
      avg_act: '34',
      playing_style: 'Technical',
      coaching_style: 'Intense & winning focused',
      position_need: 'Midfielder',
      position_signed: 'None'
    }, {
      isAdded: true,
      name: 'Duke University',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Duke_text_logo.svg/1205px-Duke_text_logo.svg.png',
      avg_gpa: '3.45',
      avg_sat: '2250',
      avg_act: '34',
      playing_style: 'Attack Oriented',
      coaching_style: 'Intense & senority respected',
      position_need: 'Striker, Midfielder',
      position_signed: 'None'
    }];
    this.targetSchools = [{
      isAdded: true,
        name: 'GeorgeTown University',
        img:'https://pbs.twimg.com/profile_images/453232578620063745/CI1Lm5hA.jpeg',
        avg_gpa: '3.77',
        avg_sat: '2100',
        avg_act: '33',
        playing_style: 'Technical',
        coaching_style: 'Enthusiastic and detailed',
        position_need: 'Striker, Midfielder(2)',
        position_signed: 'None'
      }, {
        isAdded: true,
        name: 'University of California Los Angeles',
        img:'https://img.clipartfest.com/ee3945f637c14922324ada57348a2836_qb-lucas-mcneil-round-7-ucla-logo-clip-art_350-281.jpeg',
        avg_gpa: '3.54',
        avg_sat: '2090',
        avg_act: '30',
        playing_style: 'Technical',
        coaching_style: 'Face-paced and lots of film',
        position_need: 'Striker, Defender(2)',
        position_signed: 'Defender'
      },{
        isAdded: true,
        name: 'UNC - Chapel Hill',
        img:'http://www.unc.edu/files/2012/06/ccm1_032685.jpg',
        avg_gpa: '3.72',
        avg_sat: '2000',
        avg_act: '30',
        playing_style: 'Attack Oriented',
        coaching_style: 'Intense and lots of weight training',
        position_need: 'Striker(2), Goalie',
        position_signed: 'Goalie'
      },{
        isAdded: true,
        name: 'American University',
        img:'http://www.american.edu/customcf/responsive-site/images/logos/crest.svg',
        avg_gpa: '3.31',
        avg_sat: '1980',
        avg_act: '29',
        playing_style: 'Attack Oriented',
        coaching_style: 'Conditioning based - 5 miles everyday',
        position_need: 'Striker, Midfielder(2)',
        position_signed: 'Midfielder'
      },
    ];
    this.safetySchools = [
      {
        isAdded: true,
        name: 'University of Denver',
        img:'http://www.du.edu/_resources/images/avatars/facebook_avatarpreview200x200.jpg',
        avg_gpa: '3.03',
        avg_sat: '1600',
        avg_act: '27',
        playing_style: 'Technical',
        coaching_style: 'Lots of film and double practices',
        position_need: 'Striker, Defender',
        position_signed: 'None'
      },{
        isAdded: true,
        name: 'Unversity of Maryland',
        img:'http://www.trademarks.umd.edu/marks/gr/formal.gif',
        avg_gpa: '3.22',
        avg_sat: '1500',
        avg_act: '26',
        playing_style: 'Attack Oriented',
        coaching_style: 'Strong willed and intense practices',
        position_need: 'Striker, Midfielder(2)',
        position_signed: 'None'
      }
    ];
    this.searchResults = [
      {
        isAdded: false,
        name: 'Villanova University',
        img:'https://tirecovers.com/media/wysiwyg/College_logos/Villanova-University-V-Block-Primary-Logo.jpg',
        avg_gpa: '3.01',
        avg_sat: '1650',
        avg_act: '26',
        playing_style: 'Attacking',
        coaching_style: 'Aggressive Criticism',
        position_need: 'Strikers (2)',
        position_signed: 'Striker'
      },{
        isAdded: false,
        name: 'Syracuse University',
        img:'https://img.clipartfest.com/ec2ace337cd03f562ecbaa3b555be9db_slide-1-syracuse-university-clipart_1365-1024.jpeg',
        avg_gpa: '3.20',
        avg_sat: '1500',
        avg_act: '26',
        playing_style: 'Attacking',
        coaching_style: 'Loud and intense practices',
        position_need: 'Striker, Midfielder',
        position_signed: 'None'
      },
      {
        isAdded: false,
        name: 'Wake Forest University',
        img:'https://www.westernchristian.org/images/college_logos/Wake%20Forest%20University.gif',
        avg_gpa: '3.57',
        avg_sat: '1550',
        avg_act: '25',
        playing_style: 'Techincal',
        coaching_style: 'Exhausting practices but fair playing time distribution',
        position_need: 'Striker(2), Midfielder',
        position_signed: 'Midfielder'
      },
      {
        isAdded: false,
        name: 'University of Notre Dame',
        img:'https://img.clipartfest.com/b57566a5048562f5fd798aec8349d798_com-8161-notre-dame-fighting-notre-dame-clipart-logo_1365-1024.jpeg',
        avg_gpa: '3.73',
        avg_sat: '1700',
        avg_act: '24',
        playing_style: 'Attack Oriented',
        coaching_style: 'Strong willed and long practices',
        position_need: 'Striker, Midfielder',
        position_signed: 'None'
      }
    ];
    this.conversations = [{
      name: 'James Finn',
      img: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-finn.png',
      title: 'Stanford Head Coach',
    },{
      name: 'Johnny Rey',
      img: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-rey.png',
      title: 'Michigan Athletic Director',
    },{
      name: 'Luke Marcus',
      img: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-luke.png',
      title: 'Syracuse Admissions Rep.',
    },{
      name: 'Poe Baker',
      img: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-poe.png',
      title: 'Maryland Assistant Coach',
    },{
      name: 'Ben Simmons',
      img: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ben.png',
      title: 'Denver Athletic Trainer',
    },{
      name: 'Lily Lake',
      img: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-leia.png',
      title: 'Georgetown Admissions Rep',
    },{
      name: 'Venkman Viking',
      img: 'https://ionicframework.com/dist/preview-app/www/assets/img/venkman.jpg',
      title: 'UNC Assistant Coach',
    },{
      name: 'Ethan Ergon',
      img: 'https://ionicframework.com/dist/preview-app/www/assets/img/spengler.jpg',
      title: 'Michigan Assistant Coach',
    },{
      name: 'Ray Roberts',
      img: 'https://ionicframework.com/dist/preview-app/www/assets/img/stantz.jpg',
      title: 'UCLA Athletic Director',
    },{
      name: 'Tyler Tully',
      img: 'https://ionicframework.com/dist/preview-app/www/assets/img/tully.jpg',
      title: 'Wake Forest Head Coach',
    }]
  }

}
