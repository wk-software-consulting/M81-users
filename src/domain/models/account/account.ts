import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { randomUUID } from 'crypto';

export type AccountDocument = AccountModel & Document;

@Schema({
  collection: 'accounts',
  timestamps: true,
  autoIndex: true,
})
export class AccountModel {
  @Prop({
    type: String,
    required: true,
    default: () => randomUUID(),
  })
  _id!: string;
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  surname: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    type: String,
    required: true,
  })
  password: string;

  @Prop({
    type: Date,
  })
  createdAt: Date;

  @Prop({
    type: Date,
  })
  updatedAt: Date;
}

export const AccountSchema = SchemaFactory.createForClass(AccountModel);
