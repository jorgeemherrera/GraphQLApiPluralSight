import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag'
import { Session, Query } from '../types';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  sessions: Observable<Session[]>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.sessions = this.apollo.watchQuery<Query>({
      query: gql`
        query allSessions {
          allSessions {
            id
            title
            description
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(result => result.data.allSessions)
      );
  }
}
