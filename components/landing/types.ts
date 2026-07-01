import type React from 'react';
import type { LegalSection } from '../LegalModal';

export type AnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => void;

export type ModalClick = (event: React.MouseEvent<HTMLElement>) => void;

export type LegalClick = (event: React.MouseEvent<HTMLElement>, section: LegalSection) => void;

