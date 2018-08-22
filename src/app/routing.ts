import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MultiPlayerGameComponent } from './multi-player-game/multi-player-game.component';
import { MultiPlayerLeaderBoardComponent } from './multi-player-leader-board/multi-player-leader-board.component';
import { MultiPlayerResultComponent } from './multi-player-result/multi-player-result.component'

const routes: Routes = [
    { path: 'start', component: MultiPlayerGameComponent },
    { path: '', component: MultiPlayerLeaderBoardComponent },
    { path: 'result', component: MultiPlayerResultComponent },
  
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }