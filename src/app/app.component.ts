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
      "Age": "Mayukha 9, Smitika",
      "introduction": "We now invite you to enjoy a beautiful classical dance performance dedicated to Lord Ganesha, the remover of obstacles and the god of wisdom. The dancers will be performing to the soulful composition ‘Maha Ganapathim’, a timeless Carnatic kriti that praises Lord Ganesha’s divine attributes. Please welcome two talented young artists — Mayukha and Smitika, both 9 years old — as they bring this devotional piece to life through their graceful movements and expressions. Let’s encourage them with a warm round of applause!",
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
      "childeName": "Advika & Ishaan",
      "Age": "Advika 5 and Ishan 7",
      "introduction": "GGet ready for a dose of cuteness and energy! Up next, we have a super fun Bollywood dance performance to the hit song ‘Aankh Marey’! Taking the stage are our youngest stars — 5-year-old Advika and 7-year-old Ishaan — ready to charm you with their moves and smiles. Let’s make some noise and cheer them on as they light up the stage!",
      "isPlaying": false,
      "parentName": "Advika (Suman/Keerthi), Ishan (Rekha/Pavan)",
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
      "Timestamp": "4/18/2025 9:18:49",
      "childeName": "Advika & Ishaan",
      "Age": 5,
      "introduction": "Up next, we have a heartwarming performance to the soulful Bollywood song ‘Raanjhanaa’. Taking the stage are our young and graceful dancers — 5-year-old Advika and 7-year-old Ishaan. With their expressive moves and beautiful coordination, they’re sure to win your hearts. Let’s welcome them with a big round of applause!",
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
      "Timestamp": "4/26/2025 19:03:36",
      "childeName": "Glenn Muindi (Sonic)",
      "Age": 10,
      "introduction": "Ladies and gentlemen, boys and girls, prepare to be amazed! Up next is 10‑year‑old Glenn Muindi, son of Jane Mburu, who’s all set to astonish us with his very own magic trick. Give it up for Glenn!",
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
      "Timestamp": "5/14/2025 15:03:17",
      "childeName": "Mayukha and Rishya",
      "Age": 9,
      "introduction": "Next up, get ready for some rhythm, style, and amazing moves! Dancing to the international hit ‘Shape of You’ are two talented young performers — Mayukha and Rishya, Watch as they bring their energy and creativity to the stage with this fun and modern dance. Let’s give them a big round of applause and enjoy the show!",
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
      "Timestamp": "4/27/2025 11:03:49",
      "childeName": "Anika Thallati",
      "Age": 9,
      "introduction": "Now, please welcome a talented young musician to the stage — Anika Thallati. She will be performing a beautiful piece on her instrument, showcasing both skill and passion beyond her years, Let’s sit back, relax, and enjoy the melodious performance by Anika. A big round of applause for her!",
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
      "Timestamp": "4/27/2025 22:44:07",
      "childeName": "Abhiram Thallati",
      "Age": 5,
      "isPlaying": false,
      "introduction": "Get ready for a dose of pure joy! Up next, we have 5-year-old Abhiram Thallati, who will be singing the beloved classic ‘You Are My Sunshine’. With his adorable voice and big heart, he's sure to bring smiles to everyone’s faces. Let’s give a warm welcome to little Abhiram!",
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
      "Timestamp": "5/12/2025 13:16:19",
      "childeName": "Anshita Gonuguntla",
      "Age": 7,
      "introduction": "Up next, we have the talented 7-year-old Anshita Gonuguntla, ready to light up the stage with her powerful voice. She will be singing the inspiring song ‘Girl on Fire’. Let’s cheer her on as she brings strength and passion to this amazing performance!",
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
      "Age": "Shresta(6), Fiona(5), Arjun(9)",
      "introduction": "Get ready for an energetic group performance! Please welcome Shresta, Fiona, and Arjun as they take the stage to dance to the powerful hit ‘Believer’. Watch their synchronization and enthusiasm light up the stage. Let’s give them a big round of applause!",
      "isPlaying": false,
      "parentName": "Sridhar Reddy, Nilesh Vaghela, Naresh Kusa",
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
      "Age": 9,
      "introduction": "Up next, get ready to groove with 9-year-old Arjun as he dances to the high-energy Bollywood number ‘Paisa Vasool’!, Watch his moves and charisma light up the stage. Let’s cheer him on with a big round of applause!",
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
      "Timestamp": "4/16/2025 21:08:57",
      "childeName": "Dhyani",
      "Age": 6,
      "introduction": "Next up, we have the delightful 6-year-old Dhyani, who’s ready to dazzle you with her dance to the catchy and popular song ‘Dance Monkey’. Let’s cheer for Dhyani as she lights up the stage with her joyful moves!",
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
      "Timestamp": "4/28/2025 14:57:31",
      "childeName": "Anika Thallati & Mayukha Koulampet",
      "Age": 9,
      "introduction": "Up next, please welcome two incredible young dancers — Anika Thallati and Mayukha Koulampet. They will be performing a powerful and inspiring dance to ‘Unstoppable’ by Sia. Watch as they express strength, confidence, and grace through their movements. Let’s give them a big round of applause!",
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
      "Timestamp": "5/4/2025 8:32:19",
      "childeName": "Arjun Pareek",
      "Age": 11,
      "introduction": "Up next, get ready to groove with 11-year-old Arjun Pareek as he dances to the catchy and feel-good hit ‘Sunroof’ by Nicky Youre and Dazy. Let’s cheer him on as he brings energy and style to the stage!",
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
      "introduction": "Please welcome the talented 8-year-old Shreyansh Boddu, who will be enchanting us with his piano skills. Get ready to enjoy a beautiful and melodic performance!",
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
      "Timestamp": "5/2/2025 16:18:24",
      "childeName": "Anshu Myneni",
      "Age": 12,
      "introduction": "Up next, we have Anshu Myneni, along with their talented band, ready to rock the stage with an exciting group performance. Get ready for some great music and amazing teamwork!",
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
      "introduction": "Please welcome 12-year-old Smayan, who will be captivating us with a beautiful flute performance. Let’s enjoy the soothing melodies he’s about to share.",
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
