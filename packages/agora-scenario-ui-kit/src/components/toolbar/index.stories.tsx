import React, { FC, useState } from 'react';
import { Meta } from '@storybook/react';
import { Icon } from '~components/icon'
import { Toolbar, ToolbarProps, Colors, ToolItem, Pens, CloudDisk, ToolCabinet } from '~components/toolbar';

const meta: Meta = {
  title: 'Components/Toolbar',
  component: Toolbar,
};

export const Docs: FC<ToolbarProps> = (props) => {
  const [activeColor, updateColor]= useState<string>('#7ed321')
  const [pen, updatePen]= useState<string>('pen')
  const tools: ToolItem[] = [
    {
      value: 'selection',
      label: '选择',
      icon: 'select',
    },
    {
      value: 'pen',
      label: '铅笔',
      icon: 'pen',
      component: () => {
        return (
          <Pens
            value="pen"
            label="铅笔"
            icon="pen"
            activePen={pen}
            onClick={(color) => updatePen(color)}
          />
        )
        },
    },
    {
      value: 'text',
      label: '文本',
      icon: 'text',
    },
    {
      value: 'eraser',
      label: '橡皮',
      icon: 'eraser',
    },
    {
      value: 'color',
      label: '颜色',
      icon: 'color',
      component: () => {
        return (
          <Colors
            value='color'
            label='颜色'
            icon='color'
            activeColor={activeColor}
            onClick={(color) => updateColor(color)}
          />
        )
      },
    },
    {
      value: 'blank-page',
      label: '新增空白页',
      icon: 'blank-page',
    },
    {
      value: 'hand',
      label: '举手',
      icon: 'hand',
    },
    {
      value: 'cloud',
      label: '云盘',
      icon: 'cloud',
      component: () => {
        return (
          <CloudDisk
            value="cloud"
            label="云盘"
            icon="cloud"
          />
        )
      }
    },
    {
      value: 'follow',
      label: '视角跟随',
      icon: 'follow',
    },
    {
      value: 'tools',
      label: '工具箱',
      icon: 'tools',
      component: () => {
        return (
          <ToolCabinet
            value='tools'
            label='工具箱'
            icon='tools'
            cabinetList={[
              {
                id: 'cabinet-1',
                icon: <Icon type="tools"/>,
                name: 'cabinet-1'
              },
              {
                id: 'cabinet-2',
                icon: <Icon type="tools"/>,
                name: 'cabinet-2'
              },
              {
                id: 'cabinet-3',
                icon: <Icon type="tools"/>,
                name: 'cabinet-3'
              },
              {
                id: 'cabinet-4',
                icon: <Icon type="tools"/>,
                name: 'cabinet-4'
              }
            ]}
          />
        )
      }
    },
  ];
  return <Toolbar {...props} tools={tools}></Toolbar>;
};

export default meta;
