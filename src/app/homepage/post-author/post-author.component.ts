import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'post-author',
  templateUrl: './post-author.component.html',
  styleUrls: ['./post-author.component.scss']
})
export class PostAuthorComponent implements OnInit {

  @Input()
  userId: number;

  authorName: string;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getUserById(this.userId).subscribe((userInfo) => {
      let user: IUser = userInfo.data;
      this.authorName = user.name;
    });
  }

}
