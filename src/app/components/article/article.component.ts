import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public article: Article;

  constructor() { }

  ngOnInit() {

    this.article = {
      _id: '1',
      url: 'https://edition.cnn.com/2018/05/10/politics/senators-reaction-mccain-gina-haspel/index.html',
      title: 'McCain\'s rejection of Haspel weighing on senators',
      date: new Date(1525913994213),
      content: '(CNN)In the White House\'s fight to confirm Gina Haspel to be the next CIA director, a familiar voice of dissent could hurt their chances.\n' +
      '\n' +
      'Arizona Republican Sen. John McCain, who is fighting brain cancer back in Arizona, announced Wednesday evening he hoped his colleagues wouldn\'t confirm Haspel, citing her role in the Bush-era CIA interrogation program. McCain\'s comments are hanging over the Senate, following Haspel\'s confirmation hearing Wednesday and the positive news of her nomination gaining the support of at least one Democrat.\n' +
      'RELATED: Here\'s how senators say they\'ll vote on CIA director nominee Haspel\n' +
      'Sen. Jeff Flake, the retiring Republican also from Arizona, has yet to make up his mind on Haspel as of Thursday morning, a fact complicated now by McCain, who\'s been a mentor to him. Flake said McCain\'s statement will "affect everyone."\n' +
      '"He\'s been a preeminent voice on speaking out against torture," Flake said. "The laws that we now have, we used the Army field manual as a guide -- that was his bill. He was the main motivation behind that, so his voice matters here. I\'m glad that he\'s spoken up.\n' +
      'While the vast majority of Republicans have already indicated they plan to support or are leaning toward supporting Haspel, the GOP\'s majority is narrow. With McCain out and Sen. Rand Paul, a Republican from Kentucky, vowing to vote "no," the GOP can\'t afford to lose many more votes without winning broader Democratic support.\n' +
      'Haspel is back on the Hill on Thursday, meeting with those undecided Democratic senators from red or purple states, including Sens. Tim Kaine of Virginia, Joe Donnelly of Indiana and Heidi Heitkamp of North Dakota.\n' +
      'John McCain calls on Senate to reject CIA nominee Gina Haspel\n' +
      'John McCain calls on Senate to reject CIA nominee Gina Haspel\n' +
      'McCain\'s opposition to Haspel was not able to sway one of his closest allies in the Senate: Republican Sen. Lindsey Graham of South Carolina.\n' +
      '"I intend to support Gina Haspel to serve as the first female Director of the CIA," Graham said in his statement. "Ms. Haspel has rejected the interrogation policies of the past. She is fully committed to following the law that prevents future abuses. This law, among others, includes the Detainee Treatment Act which I helped author. Gina Haspel should be confirmed as soon as possible as we live in a time of continuing threats."\n' +
      'Graham\'s statement was a positive development for GOP leaders, because along with Flake, he was seen as among the most likely Republicans for Haspel\'s opponents to win over, given his close relationship to McCain, though Graham has disagreed with the Arizona senator before on other key votes.\n' +
      'RELATED: John McCain, Lindsey Graham get emotional describing friendship: \'I love him to death\'\n' +
      'John Cornyn, the Senate\'s No. 2 Republican, said he still believes that Haspel should be confirmed, despite McCain\'s statement to his colleagues.\n' +
      '"I have a lot of respect for Sen. McCain, but we haven\'t had a more qualified CIA director perhaps ever, and I think we need to have somebody in charge at CIA during a time when we have unprecedented threats and so I hope we confirm Ms. Haspel," he told reporters Thursday.\n' +
      'Later Thursday, Flake sent a letter to Attorney General Jeff Sessions asking for a Haspel-related report to be made available to all senators. The Durham report, as its known on Capitol Hill, is the Justice Department investigation into the destruction of the CIA tapes on enhanced interrogation. Democrats have also been calling for the letter to be made available to all members of the chamber, but Flake is the first Republican senator to do so.\n' +
      'RELATED: Kamala Harris says she will vote against Gina Haspel\n' +
      'Flake -- a constant critic of President Donald Trump -- told CNN Thursday morning he and McCain have often shared similar views about the harm of using enhanced interrogation technique.\n' +
      '"I met with him last Friday but we didn\'t discuss this," Flake said. "So I may see if I can reach him today but I\'ve always shared his views on this issue he knows more than anybody about torture obviously and I respect his views."\n' +
      'What Gina Haspel didn&#39;t tell us at her high-stakes CIA hearing\n' +
      'What Gina Haspel didn\'t tell us at her high-stakes CIA hearing\n' +
      'Haspel\'s nomination seemed to be moving in a positive direction Wednesday after her confirmation hearing before the Senate Intelligence Committee. Sen. Joe Manchin, a Democrat from West Virginia, announced his support as did Sen. Susan Collins, a Republican from Maine, who is considered a moderate in her party. But both of those commitments came before McCain\'s statement.\n' +
      '"I believe Gina Haspel is a patriot who loves our country and has devoted her professional life to its service and defense," McCain, who himself was tortured during the Vietnam war, said in a statement Wednesday evening. "However, Ms. Haspel\'s role in overseeing the use of torture by Americans is disturbing. Her refusal to acknowledge torture\'s immorality is disqualifying. I believe the Senate should exercise its duty of advice and consent and reject this nomination."',
      publication: 'CNN',
      image: 'https://cdn.cnn.com/cnnnext/dam/assets/171217161839-john-mccain-headshot-medium-plus-169.jpg'
    };

  }

}
