import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MatCardModule, MatButtonModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'telent-show-app';
  audioFile = '';
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef;
  data = [
    {
      "Timestamp": "4/28/2025 10:18:43",
      "childeName": "Mayukha, Smitika",
      "Age": 9,
      "isPlaying": false,
      "parentName": "Vijay & Sachin P",
      "homeAddress": "3084 Cedric ct",
      "contactNumber": 6084815185,
      "typeofTalent": "Dancing",
      "other": "Maha Ganapathim (Official Lyric Video)",
      "specReq": "Audio File Will be given",
      // "audioFile": "https://drive.google.com/file/d/1HK1YpV3sBPFImoSRF_AvYmH2_U9uh-d8/view?usp=sharing",
      "audioFile": "./audio/maha_ganapathim.mp3",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    },
    {
      "Timestamp": "4/17/2025 9:18:49",
      "childeName": "Advika&Ishaan",
      "Age": 5,
      "isPlaying": false,
      "parentName": "Suman /Keerthi",
      "homeAddress": "5059 Burnwald Ct",
      "contactNumber": 7703311273,
      "typeofTalent": "Dancing",
      "other": "Aankh Marey | Cute Jr. Kids",
      "specReq": "bluetooth player and speaker",
      // "audioFile": "https://drive.google.com/file/d/1blbMTKnIGw1jC6j_OqVtrl5fLCGa3Oym/view?usp=sharing",
      "audioFile": "./audio/aankh_Marey.mp3",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    },
    {
      "Timestamp": "5/14/2025 15:03:17",
      "childeName": "Mayukha and Rishya",
      "Age": 9,
      "isPlaying": false,
      "parentName": "Vijay",
      "homeAddress": "3084 Cedric ct",
      "contactNumber": 6084816185,
      "typeofTalent": "Dancing",
      "other": "",
      "specReq": "",
      // "audioFile": "https://drive.google.com/file/d/1Yes8d4dYq7bf5OHSx--1RplSv2wG31e-/view?usp=sharing",
      "audioFile": "./audio/shap_of_you.mp3",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    },
    {
      "Timestamp": "4/18/2025 9:18:49",
      "childeName": "Advika&Ishaan",
      "Age": 5,
      "isPlaying": false,
      "parentName": "Suman /Keerthi",
      "homeAddress": "5060 Burnwald Ct",
      "contactNumber": 7703311273,
      "typeofTalent": "Dancing",
      "other": "RAANJHANAA",
      "specReq": "",
      // "audioFile": "https://drive.google.com/file/d/11BL2_2BmdgyBcUvYlL1k2NJ3v7fDbUbl/view?usp=sharing",
      "audioFile": "./audio/raanjhanaa.mp3",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    },
    {
      "Timestamp": "4/28/2025 14:57:31",
      "childeName": "Anika Thallati & Mayukha Koulampet",
      "Age": 9,
      "isPlaying": false,
      "parentName": "Naveen Thallati",
      "homeAddress": "3002 Cedric Ct",
      "contactNumber": 8479091981,
      "typeofTalent": "Dancing",
      "other": "English Song (Sia - Unstoppable)",
      "specReq": "Music track - Unstoppable by Sia",
      // "audioFile": "https://drive.google.com/file/d/1jmiVsgD3n3WAdrBH9Gt3l6DluAdcz9uK/view?usp=sharing",
      "audioFile": "./audio/unstoppable.mp3",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    },
    {
      "Timestamp": "5/12/2025 13:16:19",
      "childeName": "Anshita Gonuguntla",
      "Age": 7,
      "isPlaying": false,
      "parentName": "Edukondalu",
      "homeAddress": "5115 Burnwald Ct",
      "contactNumber": 4703574260,
      "typeofTalent": "Dancing",
      "other": "",
      "specReq": "",
      // "audioFile": "https://drive.google.com/file/d/1wD2xWNqbvcc0SWtbAUWiyrHrQjesUMIm/view?usp=drive_link",
      "audioFile": "./audio/girl_on_fire.mp3",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    },
    {
      "Timestamp": "5/12/2025 13:16:19",
      "childeName": "Shresta, Fiona, Arjun",
      "Age": 7,
      "isPlaying": false,
      "parentName": "Divya Teacher",
      "homeAddress": "5115 Burnwald Ct",
      "contactNumber": 4703574260,
      "typeofTalent": "Dancing",
      "other": "",
      "specReq": "",
      // "audioFile": "https://drive.google.com/file/d/1wD2xWNqbvcc0SWtbAUWiyrHrQjesUMIm/view?usp=drive_link",
      "audioFile": "./audio/divya.mp3",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    },
    {
      "Timestamp": "5/12/2025 13:16:19",
      "childeName": "Arjun",
      "Age": 5,
      "isPlaying": false,
      "parentName": "Divya Teacher",
      "homeAddress": "5115 Burnwald Ct",
      "contactNumber": 8572064009,
      "typeofTalent": "Dancing",
      "other": "",
      "specReq": "",
      // "audioFile": "https://drive.google.com/file/d/1wD2xWNqbvcc0SWtbAUWiyrHrQjesUMIm/view?usp=drive_link",
      "audioFile": "./audio/arjun.mp3",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    },
    {
      "Timestamp": "4/27/2025 22:44:07",
      "childeName": "Abhiram Thallati",
      "Age": 5,
      "isPlaying": false,
      "parentName": "Naveen Thallati",
      "homeAddress": "3002 Cedric Ct",
      "contactNumber": 8479091981,
      "typeofTalent": "Singing",
      "other": "",
      "specReq": "Mic with stand",
      // "audioFile": "https://drive.google.com/file/d/1vKp5QOoSphPzJMUJHiBirtU0SOeWSsTL/view?usp=sharing",
      "audioFile": "./audio/abhiraam.mp3",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    },
    {
      "Timestamp": "4/16/2025 21:08:57",
      "childeName": "Dhyani",
      "Age": 6,
      "isPlaying": false,
      "parentName": "Krunal Patel",
      "homeAddress": "2017 Saxon Place",
      "contactNumber": 2563946661,
      "typeofTalent": "Dancing",
      "other": "Dance Monkey",
      "specReq": "",
      "audioFile": "./audio/dance_monkey.mp3",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    },
    {
      "Timestamp": "5/4/2025 8:32:19",
      "childeName": "Arjun Pareek",
      "Age": 11,
      "isPlaying": false,
      "parentName": "Mayank",
      "homeAddress": "3095 Cedric Ct",
      "contactNumber": 9802135474,
      "typeofTalent": "Dancing",
      "other": "Group singing  Nicky Youre, dazy",
      "specReq": "Nicky Youre, dazy",
      // "audioFile": "https://drive.google.com/file/d/116dgT0cp9BHlHV9ZRULYB_HN-5LA36Fr/view?usp=sharing",
      "audioFile": "./audio/nicky_youre.mp3",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    },
    {
      "Timestamp": "4/28/2025 21:30:25",
      "childeName": "Shreyansh Boddu",
      "Age": 8,
      "isPlaying": false,
      "parentName": "Ramesh Boddu",
      "homeAddress": "3080 Cedric ct",
      "contactNumber": 9803198612,
      "typeofTalent": "Playing an Instrument,",
      "other": "",
      "specReq": "Piano or keyboard  (Mine)",
      "audioFile": "",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    },
    {
      "Timestamp": "4/27/2025 11:03:49",
      "childeName": "Anika Thallati",
      "Age": 9,
      "isPlaying": false,
      "parentName": "Naveen Thallati",
      "homeAddress": "3002 Cedric Ct",
      "contactNumber": 8479091981,
      "typeofTalent": "Playing an Instrument,",
      "other": "",
      "specReq": "Mic with stand (bluetooth speaker)",
      "audioFile": "",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    },
    {
      "Timestamp": "4/26/2025 19:03:36",
      "childeName": "Glenn Muindi (Sonic)",
      "Age": 10,
      "isPlaying": false,
      "parentName": "Jane Mburu",
      "homeAddress": "3002 Cedric Ct",
      "contactNumber": 6148442944,
      "typeofTalent": "Magic Trick",
      "other": "",
      "specReq": "",
      "audioFile": "",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    },
    {
      "Timestamp": "5/2/2025 16:18:24",
      "childeName": "Anshu Myneni",
      "Age": 12,
      "isPlaying": false,
      "parentName": "Basaveswara Rao Myneni",
      "homeAddress": "3070 Cedric ct",
      "contactNumber": 2017023929,
      "typeofTalent": "Other",
      "other": "Group Band performance",
      "specReq": "Music stands and chairs",
      "audioFile": "",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    },
    {
      "Timestamp": "5/4/2025 6:40:38",
      "childeName": "Smayan",
      "Age": 12,
      "isPlaying": false,
      "parentName": "Sachin Porandla",
      "homeAddress": "3120 cedric ct",
      "contactNumber": 6122444381,
      "typeofTalent": "Playing an Instrument,",
      "other": "Flute",
      "specReq": "",
      "audioFile": "",
      "Consent to Use Photos/Videos for Community Sharing?": "Yes, I give permission"
    }
  ];
  toggleAudio(data: any) {
    const audio = this.audioPlayerRef.nativeElement;
    this.audioFile = data.audioFile;
    if (!data.isPlaying) {
      this.data.forEach(item => item.isPlaying = false,audio.pause());
    }
    if (data.isPlaying) {
      audio.pause();
    } else {
      setTimeout(() => {audio.play()}, 1000);
    }
    data.isPlaying = !data.isPlaying;
  }
  adjustVolume(event: Event) {
    const volume = parseFloat((event.target as HTMLInputElement).value);
    this.audioPlayerRef.nativeElement.volume = volume;
  }
}
