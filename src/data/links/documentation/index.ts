import type { Link, LinkCategory, LinkCategoryName } from '../index';
import Docker from './docker';
import Express from './express';
import Kubernetes from './kubernetes';
import Mdn from './mdn';
import Mongoose from './mongoose';
import NextJS from './next-js';
import NodeJS from './node-js';
import PostgreSQL from './postgresql';
import React from './react';


type documentationCategoryName = Extract<LinkCategoryName, 'Documentation'>;


export type DocumentationLink = Omit<Link, 'category'> & {
    category: documentationCategoryName
};


const documentationCategoryLinks: Array<DocumentationLink> = [
    Docker,
    Express,
    Kubernetes,
    Mdn,
    Mongoose,
    NextJS,
    NodeJS,
    PostgreSQL,
    React,
];


const documentationCategory: LinkCategory = {
    name: 'Documentation',
    links: documentationCategoryLinks
};


export default documentationCategory;