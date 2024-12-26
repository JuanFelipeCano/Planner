import { DSInputType } from "@shared/components/ds-input";

export const CREATE_TASK_CONFIG = {
  form: {
    title: {
      id: 'task-title',
      label: 'Title',
      type: DSInputType.TEXT,
    },
    obervarions: {
      id: 'task-observations',
      label: 'Observations',
      type: DSInputType.TEXT,
    },
    priority: {
      id: 'task-priority',
      label: 'Priority',
      type: DSInputType.TEXT,
    },
    date: {
      id: 'task-date',
      label: 'Date',
      type: DSInputType.TEXT,
    },
  }
};
