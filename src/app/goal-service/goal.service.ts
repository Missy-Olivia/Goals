import { Injectable } from '@angular/core';
import { goals } from 'goals';
import { Goal } from '../goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
getGoals(){
  return goals
  
}
  constructor() { }
}
