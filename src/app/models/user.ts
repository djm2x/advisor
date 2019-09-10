import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, OneToMany } from 'typeorm';

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id = null;

    @Column('text')
    firstname = '';

    @Column('text')
    lastname = '';

    @Column('text')
    tel = '';

    @Index({ unique: true })
    @Column('text')
    email = '';

    @Column('text')
    password = '';

    @Column('int')
    rememberMe = 0;

    @OneToMany(type => Question, va => va.question)
    questons: Question[];
}

@Entity('question')
export class Question {

    @PrimaryGeneratedColumn()
    id = null;

    @Column('text')
    question = '';

    @Column('text')
    questionId = '';

    @ManyToOne(type => User, a => a.questons, { onDelete: 'CASCADE' })
    user: User;
}
