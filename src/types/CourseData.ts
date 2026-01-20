// TypeScript interfaces for JSON-based course system

export interface CourseMetadata {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageSource?: string;
  imageSourceUrl?: string;
}

export interface TextContent {
  type: "text";
  content: string;
}

export interface ListContent {
  type: "list";
  items: string[];
}

export interface CodeContent {
  type: "code";
  language: string;
  code: string;
}

export interface ImageContent {
  type: "image";
  src: string;
  alt: string;
  width?: string;
  caption?: string;
}

export interface VideoContent {
  type: "video";
  url: string;
  thumbnail?: string;
  caption?: string;
}

export interface IframeContent {
  type: "iframe";
  src: string;
  width?: string;
  height?: string;
  caption?: string;
}

export interface PopupContent {
  type: "popup";
  trigger: string;
  content: string;
}

export interface LinkContent {
  type: "link";
  text: string;
  url: string;
  external?: boolean;
}

export interface HeadingContent {
  type: "heading";
  level: 2 | 3 | 4;
  text: string;
}

export interface PythonRunnerContent {
  type: "python-runner";
  initialCode?: string;
  title?: string;
  defaultLibraries?: string[];
}

export type CourseContent =
  | TextContent
  | ListContent
  | CodeContent
  | ImageContent
  | VideoContent
  | IframeContent
  | PopupContent
  | LinkContent
  | HeadingContent
  | PythonRunnerContent;


export interface CourseSection {
  title?: string;
  content: CourseContent[];
}

export interface CourseData {
  metadata: CourseMetadata;
  sections: CourseSection[];
}
