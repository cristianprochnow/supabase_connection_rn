import React, { PropsWithChildren, ReactNode } from 'react';
import { Text } from 'react-native';

import styles from './styles';

type TitleProps = {
  children: ReactNode | string;
};

const Title: React.FC<TitleProps> = ({ children }: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
