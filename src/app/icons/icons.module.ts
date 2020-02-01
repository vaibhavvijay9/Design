import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';

import { Users, MessageSquare, Video, HelpCircle, Bell } from 'angular-feather/icons';

const icons = {
  Users,
  MessageSquare,
  Video,
  HelpCircle,
  Bell
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
