import { Component, Input, Output } from '@angular/core';

@Component({
    selector : 'voter',
    template : `  
        <div class="voter-up-down">
            <div>
                <i class="glyphicon glyphicon-menu-up"
                    [class.up-highlited]="upVote"
                    (click)="upClick()"      
                ></i>
            </div>
            <div>
                <span id="vote-count">{{voteCount}}</span>
            </div>
            <div>
                <i class="glyphicon glyphicon-menu-down" 
                    [class.down-highlited]="downVote"
                    (click)="downClick()"         
                ></i>
            </div>
        </div>
    `,
    styles: [`

        .voter-up-down {
            width: 20px;
            text-align: center;
        }

        .glyphicon-menu-up {
            font-size: 20px;
            color: #ccc;
            cursor: pointer;
        }

        #vote-count {
            font-size: 20px;
        }

        .glyphicon-menu-down {
            font-size: 20px;
            color: #ccc;
            cursor: pointer;
        }
        
        .up-highlited {
            color: yellow;
        }   

        .down-highlited {
            color: yellow;
        }   
    `]
})

export class VoterComponent {
    @Input() voteCount = 10;
    @Output() upVote = false;
    @Input() downVote = false;

    upClick(){
        this.voteCount++;
        this.downVote = false;
        this.upVote = true;
    }

    downClick(){
        this.voteCount--;
        this.downVote = true;
        this.upVote = false;
    }
}