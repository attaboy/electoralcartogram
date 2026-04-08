import React from 'react';

type ProvinceProps = {
  id: string
  label: string
  transform: string
  children: React.ReactNode
};

type ProvinceComponentProps = ProvinceProps & React.SVGProps<SVGGElement>;

export const Province = ({ id, label: _label, transform, children, ...props }: ProvinceComponentProps) => (
  <g id={id} transform={transform} {...props}>
    {children}
  </g>
);

