import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent implements OnInit {

  public articles: Article[];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    // this.api.getArticles().subscribe(
    //   ( data: any ) => {
    //     this.articles = <Article[]> data.result;
    //     console.log(data);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    this.articles = [{
      '_id': '5af6dbb68e8c5b73f8d23766',
      'title': 'Taximetristul care a pierdut pariul cu Dragnea a plecat din țară',
      'articleBody': 'Bogdan Lungu a postat o fotografie pe Facebook care-l înfăţişează în faţa Empire State Building din New York ținând ridicat în mâini un steag al României.\n„Aşa cum am spus...am plecat! Mândru că sunt Român!”, este mesajul care însoţeşte fotografia. Întrebat de unul dintre prieteni dacă se va întoarce, Bogdan Lungu a răspuns: „Nu cred”.\nDe asemenea, întrebat dacă a plecat de tot, Lungu răspunde: „Aproape”.\nUnul dintre prietenii săi l-a provocat să pună pariu pe o ladă de bere şi a răspuns: „Da, dar vii aici”.\nBogdan Lungu a devenit cunoscut după ce a promis că îi va da lui Liviu Dragnea o navetă de bere dacă liderul PSD postează un selfie care să dovedească faptul că se află la volan în mașină. Dragnea a postat fotografia, iar internautul a mers luni după-amiază la sediul PSD pentru a-şi onora pariul şi a dus berea promisă.\nBărbatul din Galaţi, care este taximetrist, a refuzat să mânânce însă micii aduşi de Dragnea, spunând că nu se vinde. El i-a transmis liderului PSD că va mânca mici, dar doar dacă până în 2020 vor fi gata 150 de kilometri de autostradă.',
      'articleLead': 'Bogdan Lungu, taximetristul din Galați care a pierdut un pariu online cu Liviu Dragnea şi care a fost la sediul PSD pentru a-i da o navetă de bere, a postat pe Facebook o fotografie care-l înfăţişează în faţa Empire State Building din New York. „Aşa cum am spus...am plecat”, este mesajul care însoţeşte fotografia. Întrebat de unul dintre prieteni dacă revine în ţară, bărbatul răspunde: „Nu cred”, relatează News.ro.',
      'thumbnail': 'https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTgl/MkYwNSUyRjEyJTJGOTEzMzY2XzkxMzM2/Nl9ib2dkYW4tbHVuZ3Utc3VhLWZhY2Vi/b29rLmpwZyZ3PTgwMCZoYXNoPTFhN2Rm/NjBiM2JlNmZmMzIwNmY2Yzc0YWFkZTI1Njlm.thumb.jpg',
      'url': 'https://www.digi24.ro/stiri/actualitate/social/taximetristul-care-a-pierdut-pariul-cu-dragnea-a-plecat-din-tara-928167',
      'date': '2018-05-12T00:00:00.000Z',
      'publication': {'_id': '5af6c0a595cb18b28025d8ed', 'name': 'Digi 24'},
      'created_at': '2018-05-12T12:19:02.874Z',
      'updated_at': '2018-05-12T12:19:02.874Z',
      '__v': 0
    }, {
      '_id': '5af6dc4a8e8c5b73f8d23767',
      'title': 'De ce cosmonauții ruși poartă un pistol cu ei în spațiul cosmic',
      'articleBody': 'Este vorba despre un pistol sovietic, un TP-82.\nA fost o vreme când cosmonauții ruși urcau la bordul navelor spațiale cu un astfel de pistol, care seamănă, de fapt, mai mult cu o pușcă de dimensiuni mici.\nArma este în prezent expusă în Muzeul de Artilerie din Sankt Petersburg.\nPână în 2006, capsulele Soyuz au fost dotate, în trusa de supraviețuire Granat-6, cu un TP-82. „Moda” a început în perioada sovietică, dintr-un motiv cât se poate de legitim.\nO mare parte din teritoriul vast al Rusiei este dominat de o pustietate sălbatică. O singură eroare în momentul întoarcerii astronauților, și capsula ar putea oricând nimeri în adâncurile periculoase ale stepei Siberiene.\nEste și cazul fostului cosmonaut sovietic Alexey Leonov.',
      'articleLead': 'Într-un muzeu din Rusia există, într-o vitrină, un obiect pe care Agenția Spațială Federală insistă să îl mențină într-un văl de secretomanie, deși detaliul propriu-zis și-a pierdut de mult timp caracterul de mister pentru publicul larg.',
      'thumbnail': 'https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTcl/MkYwOCUyRjIxJTJGODEyMDU3XzgxMjA1/N19zcGFjZV9ndW4uanBnJnc9NTgwJmhh/c2g9NDUzNDIxYzE0M2EyMjZmNzZhYzExZjMyNmY0OGE4MjI=.thumb.jpg',
      'url': 'https://www.digi24.ro/stiri/sci-tech/de-ce-cosmonautii-rusi-poarta-un-pistol-cu-ei-in-spatiul-cosmic-780269',
      'date': '2018-05-12T00:00:00.000Z',
      'publication': {'_id': '5af6c0a595cb18b28025d8ed', 'name': 'Digi 24'},
      'created_at': '2018-05-12T12:21:30.103Z',
      'updated_at': '2018-05-12T12:21:30.103Z',
      '__v': 0
    }, {
      '_id': '5af6dfa18e8c5b73f8d23768',
      'title': 'România, Cehia, Ungaria au blocat o declarație UE de condamnare a mutării Ambasadei SUA la Ierusalim',
      'articleBody': 'Diplomați europeni și oficiali israelieni au afirmat că declarația comună, elaborată la inițiativa Franței, ar fi urmat să prezinte un front unit european împotriva acțiunii Washingtonului.\nPotrivit televiziunii, declarația comună ar fi subliniat că Ierusalim ar trebui să fie capitala a două state - Israel și Palestina, statutul orașului ar trebui rezolvat doar în urma negocierilor de pace, iar țările UE nu vor urma exemplul SUA privind mutarea ambasadei la Ierusalim.\nPreședintele ceh Miloš Zeman și-a exprimat sprijinul pentru mutarea ambasadei țării sale la Ierusalim, însă prim-ministrul de la Praga, Andrej Babiš, se opune. Totodată, premierul român Viorica Dăncilă s-a pronunțat în favoarea mutării, însă președintele Klaus Iohannis se opune, menționează publicația israeliană.\nPostul Hadashot TV a relatat miercuri că mai mulți diplomați europeni, inclusiv din Marea Britanie, Franța și Germania, vor boicota ceremonia programată să aibă loc săptămâna viitoare cu ocazia inaugurării ambasadei americane la Ierusalim.\nGuvernul Benjamin Netanyahu a invitat întreg corpul diplomatic din Israel la ceremonie."Este un pic ciudat să ne invite la un eveniment față de care ne opunem și pe care îl condamnăm. Americanii au fost mai abili și au știut dinainte să nu ne invite ca să nu se facă de rușine", a declarat o sursă diplomatică europeană, citată de Hadashot TV.\nMinisterul de Externe israelian a transmis că "30 din 86 de ambasadori" au răspuns afirmativ la invitație.',
      'articleLead': 'România, Cehia și Ungaria au blocat planurile de adoptare a unei declarații comune a Uniunii Europene prin care se condamna mutarea Ambasadei SUA de la Tel Aviv la Ierusalim, potrivit postului israelian Channel Ten, care citează surse diplomatice, informează site-ului cotidianului Times of Israel, citat de Mediafax.',
      'thumbnail': 'http://media.hotnews.ro/media_server1/image-2018-04-25-22413647-46-viorica-dancila-benjamin-netanyahu.jpg',
      'url': 'https://www.hotnews.ro/stiri-international-22444090-romnia-cehia-ungaria-blocat-declaratie-condamnare-mutarii-ambasadei-sua-ierusalim.htm',
      'date': '2018-05-12T00:00:00.000Z',
      'publication': {'_id': '5af6df3c95cb18b28025d8ee', 'name': 'Hotnews'},
      'created_at': '2018-05-12T12:35:45.672Z',
      'updated_at': '2018-05-12T12:35:45.672Z',
      '__v': 0
    }];
  }


}
