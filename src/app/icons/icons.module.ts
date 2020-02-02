import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';

import { 
  Users, MessageSquare, Video, HelpCircle, Bell,
  Eye, BarChart2, Maximize2, Volume2, Type, Image, Mic, Film
} from 'angular-feather/icons';

const icons = {
  Users,
  MessageSquare,
  Video,
  HelpCircle,
  Bell,
  Eye,
  BarChart2,
  Maximize2,
  Volume2,
  Type,
  Image,
  Mic,
  Film
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
