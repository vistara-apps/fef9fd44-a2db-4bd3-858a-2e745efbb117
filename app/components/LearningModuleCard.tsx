'use client';

import { BookOpen, Clock, CheckCircle, Play } from 'lucide-react';
import type { LearningModule } from '@/lib/types';

interface LearningModuleCardProps {
  module: LearningModule;
  onStart?: (moduleId: string) => void;
  onContinue?: (moduleId: string) => void;
}

export function LearningModuleCard({ module, onStart, onContinue }: LearningModuleCardProps) {
  const getDifficultyColor = () => {
    switch (module.difficulty) {
      case 'beginner':
        return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'intermediate':
        return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'advanced':
        return 'text-red-500 bg-red-500/10 border-red-500/20';
      default:
        return 'text-text-secondary bg-surface border-border';
    }
  };

  return (
    <div className="metric-card animate-fade-in">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-yellow-500 rounded-lg flex items-center justify-center">
            {module.completed ? (
              <CheckCircle className="text-black" size={20} />
            ) : (
              <BookOpen className="text-black" size={20} />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">{module.title}</h3>
            <div className={`px-2 py-1 rounded-full text-xs font-medium border inline-flex items-center ${getDifficultyColor()}`}>
              <span className="capitalize">{module.difficulty}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-text-secondary text-sm mb-4 leading-relaxed">{module.content}</p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-sm text-text-secondary">
          <Clock size={14} />
          <span>{module.estimatedTime} min</span>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {module.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-surface border border-border rounded-md text-xs text-text-secondary"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-2">
        {module.completed ? (
          <button
            onClick={() => onContinue?.(module.moduleId)}
            className="flex-1 btn-secondary px-4 py-2 rounded-lg font-medium flex items-center justify-center space-x-2"
          >
            <CheckCircle size={16} />
            <span>Completed</span>
          </button>
        ) : (
          <button
            onClick={() => onStart?.(module.moduleId)}
            className="flex-1 btn-primary px-4 py-2 rounded-lg font-medium flex items-center justify-center space-x-2"
          >
            <Play size={16} />
            <span>Start Learning</span>
          </button>
        )}
      </div>
    </div>
  );
}
